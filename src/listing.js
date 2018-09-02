// @flow

type Listing = {
  listingId: string,
  details: {

  },
  location: {

  },
  price: {

  },
  features: {

  },
};

const buildListingHandlers = (config, server) => {
  const createListing = async (request: Request, response: Response) => {

  };

  const updateListing = async (request: Request, response: Response) => {

  };

  const retrieveListing = async (request: Request, response: Response) => {

  };

  const deleteListing = async (request: Request, response: Response) => {

  };

  server.put('/listings/:listingId', createListing);
  server.update('/listings/:listingId', updateListing);
  server.get('/listings/:listingId', retrieveListing);
  server.delete('/listings/:listingId', deleteListing);
};