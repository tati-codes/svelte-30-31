const view_types = ["TIMER", "PICKER", "SETTINGS", "TASK_EDIT"] as const;
const isView = (str: any | Views): str is Views => ["TIMER", "PICKER", "SETTINGS", "TASK_EDIT"].includes(str);
export type Views = (typeof view_types)[number];
