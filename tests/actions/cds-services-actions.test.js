import * as types from '../../src/actions/action-types';
import * as actions from '../../src/actions/cds-services-actions';

describe('CDS Services Actions', () => {
  it('creates action to signal the retrieval of CDS Service Discovery endpoints', () => {
    const url = 'http://example.com/cds-services';
    const expectedAction = {
      type: types.DISCOVER_CDS_SERVICES,
      testUrl: url,
    };

    expect(actions.signalRetrievingServices(url)).toEqual(expectedAction);
  });

  it('creates action to signal a successful connection to CDS Services', () => {
    const services = { hook: 'patient-view', id: 'example-service' };
    const discoveryUrl = 'http://discovery.com/cds-services';
    const expectedAction = {
      type: types.DISCOVER_CDS_SERVICES_SUCCESS,
      services,
      discoveryUrl,
    };

    expect(actions.signalSuccessServicesRetrieval(services, discoveryUrl)).toEqual(expectedAction);
  });

  it('creates action to signal a failed connection to CDS Services', () => {
    const expectedAction = {
      type: types.DISCOVER_CDS_SERVICES_FAILURE,
    };

    expect(actions.signalFailureServicesRetrieval()).toEqual(expectedAction);
  });

  it('creates action to delete configured CDS Services', () => {
    const expectedAction = { type: types.RESET_SERVICES };
    expect(actions.resetServices()).toEqual(expectedAction);
  });

  it('creates action to toggle enabled status on a CDS Service', () => {
    const service = 'https://example.com/cds-services/id-1';
    const expectedAction = {
      type: types.TOGGLE_SERVICE,
      service,
    };

    expect(actions.toggleService(service)).toEqual(expectedAction);
  });

  it('creates action to remove a CDS Service from configuration', () => {
    const service = 'https://example.com/cds-services/id-1';
    const expectedAction = {
      type: types.DELETE_SERVICE,
      service,
    };

    expect(actions.deleteService(service)).toEqual(expectedAction);
  });
});
