import {
  API_ROOT,
  WS_URL,
  SENTRY_DSN,
  ENV,
  BLUEPRINTS_API_URL,
  APP_ID,
  WIDGET_EMBED_PATH,
  IS_DOCKER_HOSTED,
  REACT_APP_VERSION,
  INTERCOM_APP_ID,
  CONTEXT_PATH,
  WEBHOOK_URL,
  MAIL_SERVER_DOMAIN,
  LAUNCH_DARKLY_CLIENT_SIDE_ID,
  FEATURE_FLAGS,
  HUBSPOT_PORTAL_ID,
} from '@novu/shared-web';

export {
  API_ROOT,
  WS_URL,
  SENTRY_DSN,
  ENV,
  BLUEPRINTS_API_URL,
  APP_ID,
  WIDGET_EMBED_PATH,
  IS_DOCKER_HOSTED,
  REACT_APP_VERSION,
  INTERCOM_APP_ID,
  CONTEXT_PATH,
  WEBHOOK_URL,
  MAIL_SERVER_DOMAIN,
  LAUNCH_DARKLY_CLIENT_SIDE_ID,
  FEATURE_FLAGS,
  HUBSPOT_PORTAL_ID,
};

export const IS_EU_ENV = (ENV === 'production' || ENV === 'prod') && API_ROOT.includes('eu.api.novu.co');
