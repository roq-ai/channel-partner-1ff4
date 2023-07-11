import type { NextApiRequest, NextApiResponse } from 'next';
import { roqClient } from 'server/roq';
import { prisma } from 'server/db';
import { errorHandlerMiddleware } from 'server/middlewares';
import { checklistValidationSchema } from 'validationSchema/checklists';
import { HttpMethod, convertMethodToOperation, convertQueryToPrismaUtil } from 'server/utils';
import { getServerSession } from '@roq/nextjs';

async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { roqUserId, user } = await getServerSession(req);
  await prisma.checklist
    .withAuthorization({
      roqUserId,
      tenantId: user.tenantId,
      roles: user.roles,
    })
    .hasAccess(req.query.id as string, convertMethodToOperation(req.method as HttpMethod));

  switch (req.method) {
    case 'GET':
      return getChecklistById();
    case 'PUT':
      return updateChecklistById();
    case 'DELETE':
      return deleteChecklistById();
    default:
      return res.status(405).json({ message: `Method ${req.method} not allowed` });
  }

  async function getChecklistById() {
    const data = await prisma.checklist.findFirst(convertQueryToPrismaUtil(req.query, 'checklist'));
    return res.status(200).json(data);
  }

  async function updateChecklistById() {
    await checklistValidationSchema.validate(req.body);
    const data = await prisma.checklist.update({
      where: { id: req.query.id as string },
      data: {
        ...req.body,
      },
    });

    return res.status(200).json(data);
  }
  async function deleteChecklistById() {
    const data = await prisma.checklist.delete({
      where: { id: req.query.id as string },
    });
    return res.status(200).json(data);
  }
}

export default function apiHandler(req: NextApiRequest, res: NextApiResponse) {
  return errorHandlerMiddleware(handler)(req, res);
}
