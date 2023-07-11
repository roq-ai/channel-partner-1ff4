import { ChecklistInterface } from 'interfaces/checklist';
import { DealInterface } from 'interfaces/deal';
import { DocumentInterface } from 'interfaces/document';
import { KnowledgeBaseInterface } from 'interfaces/knowledge-base';
import { UserInterface } from 'interfaces/user';
import { GetQueryInterface } from 'interfaces';

export interface CompanyInterface {
  id?: string;
  description?: string;
  image?: string;
  name: string;
  created_at?: any;
  updated_at?: any;
  user_id: string;
  tenant_id: string;
  checklist?: ChecklistInterface[];
  deal?: DealInterface[];
  document?: DocumentInterface[];
  knowledge_base?: KnowledgeBaseInterface[];
  user?: UserInterface;
  _count?: {
    checklist?: number;
    deal?: number;
    document?: number;
    knowledge_base?: number;
  };
}

export interface CompanyGetQueryInterface extends GetQueryInterface {
  id?: string;
  description?: string;
  image?: string;
  name?: string;
  user_id?: string;
  tenant_id?: string;
}
