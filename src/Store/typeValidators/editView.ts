const view_types = ["ICON", "COLOR", "NUMPAD"] as const;
// const isView = (str: any | Views): str is Views => ["TIMER", "PICKER", "SETTINGS", "TASK_EDIT"].includes(str);
export type editViews = (typeof view_types)[number];
