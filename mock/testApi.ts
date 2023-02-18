/* eslint-disable @typescript-eslint/naming-convention */
export default {
  'GET /api/testApi': (_req: any, res: any) => {
    res.json({
      success: true,
      data: {},
      errorCode: 0,
    });
  },
};
