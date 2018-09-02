// @flow

type Agent = {
  agentId: string,
  name: string,
  contactDetails: Array<{
    contactMethod: string,
    contactDetails: string,
  }>,
};

const buildAgentHandlers = (config, server) => {
  const createAgent = async (request: Request, response: Response) => {

  };

  const updateAgent = async (request: Request, response: Response) => {

  };

  const retrieveAgent = async (request: Request, response: Response) => {

  };

  const deleteAgent = async (request: Request, response: Response) => {

  };

  server.put('/agents/:agentId', createAgent);
  server.update('/agents/:agentId', updateAgent);
  server.get('/agents/:agentId', retrieveAgent);
  server.delete('/agents/:agentId', deleteAgent);
};