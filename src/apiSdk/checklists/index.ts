import axios from 'axios';
import queryString from 'query-string';
import { ChecklistInterface, ChecklistGetQueryInterface } from 'interfaces/checklist';
import { GetQueryInterface } from '../../interfaces';

export const getChecklists = async (query?: ChecklistGetQueryInterface) => {
  const response = await axios.get(`/api/checklists${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const createChecklist = async (checklist: ChecklistInterface) => {
  const response = await axios.post('/api/checklists', checklist);
  return response.data;
};

export const updateChecklistById = async (id: string, checklist: ChecklistInterface) => {
  const response = await axios.put(`/api/checklists/${id}`, checklist);
  return response.data;
};

export const getChecklistById = async (id: string, query?: GetQueryInterface) => {
  const response = await axios.get(`/api/checklists/${id}${query ? `?${queryString.stringify(query)}` : ''}`);
  return response.data;
};

export const deleteChecklistById = async (id: string) => {
  const response = await axios.delete(`/api/checklists/${id}`);
  return response.data;
};
