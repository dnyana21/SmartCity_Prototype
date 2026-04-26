const express = require("express");
const cors = require("cors");
const { v4: uuidv4 } = require("uuid");

const app = express();
app.use(cors());
app.use(express.json());

// ── Predefined Data ──────────────────────────────────────────────────────────

const wards = [
  { id: "ward-1", name: "Ward 1", area: "Area A — Downtown" },
  { id: "ward-2", name: "Ward 2", area: "Area B — Suburbs" },
];

const officers = [
  { id: "off-1", name: "Rajesh Kumar",   department: "Roads",      wardId: "ward-1", score: 100 },
  { id: "off-2", name: "Priya Sharma",   department: "Water",      wardId: "ward-1", score: 100 },
  { id: "off-3", name: "Amit Patel",     department: "Sanitation", wardId: "ward-1", score: 100 },
  { id: "off-4", name: "Sunita Verma",   department: "Roads",      wardId: "ward-2", score: 100 },
  { id: "off-5", name: "Vikram Singh",   department: "Water",      wardId: "ward-2", score: 100 },
  { id: "off-6", name: "Neha Gupta",     department: "Sanitation", wardId: "ward-2", score: 100 },
];

// Demo coordinates (around Hyderabad, India)
const sampleCoords = [
  { lat: 17.385,  lng: 78.4867 },
  { lat: 17.375,  lng: 78.474  },
  { lat: 17.395,  lng: 78.49   },
  { lat: 17.38,   lng: 78.50   },
  { lat: 17.39,   lng: 78.47   },
];

// Seed complaints
const complaints = [
  {
    id: uuidv4(),
    text: "Large pothole on main road near city center causing accidents",
    category: "Roads",
    priority: "HIGH",
    wardId: "ward-1",
    officerId: "off-1",
    officerName: "Rajesh Kumar",
    status: "Pending",
    lat: 17.385,
    lng: 78.4867,
    createdAt: new Date(Date.now() - 86400000).toISOString(),
  },
  {
    id: uuidv4(),
    text: "Water pipeline leaking near park for two days",
    category: "Water",
    priority: "MEDIUM",
    wardId: "ward-1",
    officerId: "off-2",
    officerName: "Priya Sharma",
    status: "In Progress",
    lat: 17.375,
    lng: 78.474,
    createdAt: new Date(Date.now() - 172800000).toISOString(),
  },
  {
    id: uuidv4(),
    text: "Garbage not collected from street for a week",
    category: "Sanitation",
    priority: "MEDIUM",
    wardId: "ward-2",
    officerId: "off-6",
    officerName: "Neha Gupta",
    status: "Pending",
    lat: 17.395,
    lng: 78.49,
    createdAt: new Date(Date.now() - 43200000).toISOString(),
  },
  {
    id: uuidv4(),
    text: "Urgent! Road collapsed after heavy rain, danger to vehicles",
    category: "Roads",
    priority: "HIGH",
    wardId: "ward-2",
    officerId: "off-4",
    officerName: "Sunita Verma",
    status: "Pending",
    lat: 17.38,
    lng: 78.50,
    createdAt: new Date(Date.now() - 7200000).toISOString(),
  },
  {
    id: uuidv4(),
    text: "Waste bins overflowing near school entrance",
    category: "Sanitation",
    priority: "LOW",
    wardId: "ward-1",
    officerId: "off-3",
    officerName: "Amit Patel",
    status: "Resolved",
    lat: 17.39,
    lng: 78.47,
    createdAt: new Date(Date.now() - 259200000).toISOString(),
  },
];

// ── AI Classification ────────────────────────────────────────────────────────

function classifyComplaint(text) {
  const lower = text.toLowerCase();

  // Category
  let category = "General";
  if (/pothole|road|street|highway|pavement|traffic|collapsed/.test(lower)) {
    category = "Roads";
  } else if (/water|leak|pipe|pipeline|tap|drainage|flood|sewage/.test(lower)) {
    category = "Water";
  } else if (/garbage|waste|trash|rubbish|bin|sanitation|dump|litter/.test(lower)) {
    category = "Sanitation";
  }

  // Priority
  let priority = "LOW";
  if (/urgent|danger|accident|emergency|collapsed|critical|hazard|immediate/.test(lower)) {
    priority = "HIGH";
  } else if (/broken|damaged|overflow|leaking|blocked|problem|issue/.test(lower)) {
    priority = "MEDIUM";
  }

  return { category, priority };
}

function assignOfficer(category, wardId) {
  const match = officers.find(
    (o) => o.department === category && o.wardId === wardId
  );
  // fallback: first officer of ward
  return match || officers.find((o) => o.wardId === wardId) || officers[0];
}

// ── Routes ───────────────────────────────────────────────────────────────────

// Get wards
app.get("/wards", (_req, res) => {
  res.json(wards);
});

// Get officers (with scores)
app.get("/officers", (_req, res) => {
  res.json(officers.map((o) => ({ ...o })));
});

// Get complaints (optional filter by officerId)
app.get("/complaints", (req, res) => {
  const { officerId } = req.query;
  if (officerId) {
    return res.json(complaints.filter((c) => c.officerId === officerId));
  }
  res.json(complaints);
});

// Submit complaint
app.post("/complaint", (req, res) => {
  const { text, wardId } = req.body;
  if (!text || !wardId) {
    return res.status(400).json({ error: "text and wardId are required" });
  }

  const { category, priority } = classifyComplaint(text);
  const officer = assignOfficer(category, wardId);

  // Pick a random coordinate
  const coord = sampleCoords[Math.floor(Math.random() * sampleCoords.length)];

  const complaint = {
    id: uuidv4(),
    text,
    category,
    priority,
    wardId,
    officerId: officer.id,
    officerName: officer.name,
    status: "Pending",
    lat: coord.lat + (Math.random() - 0.5) * 0.01,
    lng: coord.lng + (Math.random() - 0.5) * 0.01,
    createdAt: new Date().toISOString(),
  };

  complaints.unshift(complaint);
  res.status(201).json(complaint);
});

// Update complaint status
app.patch("/update-status", (req, res) => {
  const { complaintId, status } = req.body;
  if (!complaintId || !status) {
    return res.status(400).json({ error: "complaintId and status required" });
  }

  const complaint = complaints.find((c) => c.id === complaintId);
  if (!complaint) {
    return res.status(404).json({ error: "Complaint not found" });
  }

  const oldStatus = complaint.status;
  complaint.status = status;

  // Update officer score
  const officer = officers.find((o) => o.id === complaint.officerId);
  if (officer) {
    if (status === "Resolved" && oldStatus !== "Resolved") {
      officer.score += 5;
    }
    if (status === "Delayed" && oldStatus !== "Delayed") {
      officer.score -= 5;
    }
  }

  res.json(complaint);
});

// ── Start ────────────────────────────────────────────────────────────────────
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`🚀 Grievance API running on http://localhost:${PORT}`);
});
