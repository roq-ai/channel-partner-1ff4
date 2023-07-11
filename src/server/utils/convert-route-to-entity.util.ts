const mapping: Record<string, string> = {
  checklists: 'checklist',
  companies: 'company',
  deals: 'deal',
  documents: 'document',
  'knowledge-bases': 'knowledge_base',
  users: 'user',
};

export function convertRouteToEntityUtil(route: string) {
  return mapping[route] || route;
}
