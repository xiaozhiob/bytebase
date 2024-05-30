import type { ConditionGroupExpr } from "@/plugins/cel";
import type { ComposedProject } from "@/types";
import type { DatabaseGroup } from "./proto/v1/project_service";

export interface ComposedDatabaseGroup extends DatabaseGroup {
  databaseGroupName: string;
  projectName: string;
  projectEntity: ComposedProject;
  simpleExpr: ConditionGroupExpr;
}
