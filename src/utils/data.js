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
  error: "",
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
  { label: "Quality Management Services", value: "qms" },
  { label: "Envisage", value: "envisage" },
];

let appData = {
  sne: [
    { label: "Shows Coordinator", value: "shows_coord" },
    { label: "Exhibitions Coordinator", value: "exhibitions_coord" },
    { label: "TechCreation Coordinator", value: "techcreation_coord" },
    { label: "Tech & Innovation Fair Coordinator", value: "tif_coord" },
    { label: "TechCreation Head", value: "techcreation_head" },
    { label: "Shows Head", value: "shows_head" },
    { label: "Exhibitions Head", value: "exhibitions_head" },
    { label: "Tech & Innovation Fair Head", value: "tif_head" },
  ],
  envisage: [{ label: "Coordinator", value: "coord" }],
  finance: [
    { label: "Coordinator", value: "coord" },
    { label: "Manager", value: "manager" },
  ],
  cnd: [
    // {
    //   label: "Creative Branding & Design Super Coordinator",
    //   value: "design_supercoord"
    // },
    // {
    //   label: "Creative Ambience Super Coordinator",
    //   value: "ambience_supercoord"
    // },
    // { label: "Video Editing & VFX Super Coordinator", value: "vfx_supercoord" },
    // { label: "Media Super Coordinator", value: "media_supercoord" },
    // { label: "Creative Branding & Design Coordinator", value: "design_coord" },
    // { label: "Creative Ambience Coordinator", value: "ambience_coord" },
    // { label: "Video Editing & VFX Coordinator", value: "vfx_coord" },
    // { label: "Media Coordinator", value: "media_coord" }
    { label: "Coordinator", value: "coord" },
    { label: "Super Coordinator", value: "supercoord" },
  ],
  webops: [
    { label: "Coordinator", value: "coord" },
    {
      label: "Super Coordinator",
      value: "supercoord",
    },
  ],
  onip: [
    { label: "Coordinator", value: "coord" },
    { label: "Head", value: "head" },
  ],
  spons: [
    { label: "Corporate Relations", value: "cr" },
    { label: "Public Relations", value: "pr" },
    { label: "PR Creatives", value: "creatives" },
  ],
  evolve: [
    { label: "Spotlight Coordinator", value: "spotlight_coord" },
    { label: "Summit Coordinator", value: "summit_coord" },
    { label: "Mind Trials Coordinator", value: "mindtrials_coord" },
    { label: "Spotlight Head", value: "spotlight_head" },
    { label: "Summit Head", value: "summit_head" },
    { label: "Mind Trials Head", value: "mindtrials_head" },
  ],
  publicity: [
    { label: "Coordinator", value: "coord" },
  ],
  events: [
    { label: "Coordinator", value: "coord" },
    // { label: "B Events Head", value: "bEvents_head" },
    // { label: "Aerofest Head", value: "aerofest_head" },
    // { label: "Workshops Head", value: "workshops_head" },
    // { label: "Coding and Logic Head", value: "CandL_head" },
    // { label: "Moot Court Head", value: "moot_court_head" },
    // { label: "Elecfest Head", value: "elecfest_head" },
    // { label: "Involve and Quizzing Head", value: "IandQ_head" },
    // { label: "Design and Build Head", value: "DandB_head" },
  ],
  qms: [
    { label: "Manager", value: "manager" },
    { label: "Assistant Manager", value: "assistant_manager" },
  ],
};

export { initialState, appData, deptData };
