<template>
  <SyncDatabaseSchema :key="project.name" :project="project" />
</template>

<script setup lang="ts">
import { computed } from "vue";
import SyncDatabaseSchema from "@/components/SyncDatabaseSchema/index.vue";
import { useProjectV1Store } from "@/store";
import { projectNamePrefix } from "@/store/modules/v1/common";

const props = defineProps<{
  projectId: string;
}>();

const projectV1Store = useProjectV1Store();

const project = computed(() => {
  return projectV1Store.getProjectByName(
    `${projectNamePrefix}${props.projectId}`
  );
});
</script>
