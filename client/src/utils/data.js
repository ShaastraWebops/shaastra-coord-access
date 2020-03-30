const initialState = {
  isLoading: false,
  department: "",
  position: "",
  applink: "",
  name: "",
  rollno: "",
  application: null,
  secretKey: "",
  dialogOpen: false,
  successMsg: "",
  error: ""
};

const deptData = [
  { label: "Finance", value: "finance" },
  { label: "Shows & Exhibitions", value: "sne" },
  { label: "Sponsorship & PR", value: "spons" },
  { label: "Concept & Design", value: "cnd" },
  { label: "WebOps", value: "webops" },
  { label: "Evolve", value: "evolve" },
  { label: "Events & Workshops", value: "events" },
  { label: "Operations & Infrastructure Planning", value: "onip" },
  { label: "Publicity", value: "publicity" },
  { label: "Envisage", value: "envisage" }
];

let appData = {
  sne: [
    { label: "Shows Coordinator", value: "shows_coord" },
    { label: "Exhibitions Coordinator", value: "exhibitions_coord" },
    { label: "TechCreation Coordinator", value: "techcreation_coord" },
    { label: "Tech & Innovation Fair Coordinator", value: "tif_coord" }
  ],
  envisage: [{ label: "Coordinator", value: "coord" }],
  finance: [
    { label: "Coordinator", value: "coord" },
    { label: "Manager", value: "manager" }
  ],
  cnd: [
    {
      label: "Creative Branding & Design Super Coordinator",
      value: "design_supercoord"
    },
    {
      label: "Creative Ambience Super Coordinator",
      value: "ambience_supercoord"
    },
    { label: "Video Editing & VFX Super Coordinator", value: "vfx_supercoord" },
    { label: "Media Super Coordinator", value: "media_supercoord" },
    { label: "Creative Branding & Design Coordinator", value: "design_coord" },
    { label: "Creative Ambience Coordinator", value: "ambience_coord" },
    { label: "Video Editing & VFX Coordinator", value: "vfx_coord" },
    { label: "Media Coordinator", value: "media_coord" }
  ],
  webops: [{ label: "Full Stack Coordinator", value: "coord" }],
  onip: [
    { label: "Coordinator", value: "coord" },
    { label: "Catering Head", value: "catering_head" },
    { label: "Operations Head", value: "operations_head" },
    { label: "Hospitality Head", value: "hospitality_head" }
  ],
  spons: [
    { label: "Engage & Endeavour Coordinator", value: "engage_endeavour_coord" }
  ],
  evolve: [
    { label: "Spotlight Coordinator", value: "spotlight_coord" },
    { label: "Summit Coordinator", value: "summit_coord" },
    { label: "Tech & Policy Coordinator", value: "tnp_coord" },
    { label: "Spotlight Head", value: "spotlight_head" },
    { label: "Summit Head", value: "summit_head" },
    { label: "Tech & Policy Head", value: "tnp_head" }
  ],
  publicity: [
    { label: "Coordinator", value: "coord" },
    { label: "Strategist", value: "strategist" }
  ],
  events: [{ label: "Events & Workshops Coordinator", value: "coord" }]
};

export { initialState, appData, deptData };
