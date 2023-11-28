// eslint-disable-next-line import/no-extraneous-dependencies
import type { LinkSearchListItemData } from '@atlaskit/link-picker';
import { icon } from '@atlaskit/link-test-helpers/images';

const data: LinkSearchListItemData[] = [
  {
    objectId:
      'ari:cloud:jira:DUMMY-158c8204-ff3b-47c2-adbb-a0906ccc722b:issue/20505',
    url: 'https://product-fabric.atlassian.net/browse/FAB-1520',
    name: "FAB-1520 UI: Poor man's search",
    container: 'Fabric',
    icon,
    iconAlt: 'test',
    lastViewedDate: new Date('2016-11-25T05:21:01.112Z'),
    meta: {
      source: 'recent-work',
    },
  },
  {
    objectId:
      'ari:cloud:jira:DUMMY-158c8204-ff3b-47c2-adbb-a0906ccc722b:issue/20617',
    url: 'https://product-fabric.atlassian.net/browse/FAB-1558',
    name: 'FAB-1558 Investigate the 25% empty experience problem',
    container: 'Fabric',
    icon,
    iconAlt: 'test',
    lastViewedDate: new Date('2016-11-24T23:55:20.712Z'),
    meta: {
      source: 'xp-search',
    },
  },
  {
    objectId:
      'ari:cloud:jira:DUMMY-158c8204-ff3b-47c2-adbb-a0906ccc722b:issue/18347',
    url: 'https://product-fabric.atlassian.net/browse/FAB-983',
    name: 'FAB-983 P2 Integration plugin: do not cache Cloud ID in Vertigo world',
    container: 'Fabric',
    icon,
    iconAlt: 'test',
    lastViewedDate: new Date('2016-11-24T23:30:54.633Z'),
    meta: {
      source: 'recent-work',
    },
  },
  {
    objectId:
      'ari:cloud:jira:DUMMY-158c8204-ff3b-47c2-adbb-a0906ccc722b:issue/18361',
    url: 'https://product-fabric.atlassian.net/browse/FAB-997',
    name: 'FAB-997 Investigate replacing experiment with navlinks plugin',
    container: 'Fabric',
    icon,
    iconAlt: 'test',
    lastViewedDate: new Date('2016-11-24T23:29:08.924Z'),
    meta: {
      source: 'xp-search',
    },
  },
  {
    objectId:
      'ari:cloud:jira:DUMMY-158c8204-ff3b-47c2-adbb-a0906ccc722b:issue/19087',
    url: 'https://product-fabric.atlassian.net/browse/FAB-1166',
    name: 'FAB-1166 Heading disable rules',
    container: 'Fabric',
    icon,
    iconAlt: 'test',
    lastViewedDate: new Date('2016-11-24T05:54:44.729Z'),
    meta: {
      source: 'recent-work',
    },
  },
  {
    objectId:
      'ari:cloud:jira:DUMMY-158c8204-ff3b-47c2-adbb-a0906ccc722b:issue/19018',
    url: 'https://product-fabric.atlassian.net/browse/FAB-1097',
    name: 'FAB-1097 Inline code disable rules',
    container: 'Fabric',
    icon,
    iconAlt: 'test',
    lastViewedDate: new Date('2016-11-24T05:54:39.227Z'),
    meta: {
      source: 'xp-search',
    },
  },
  {
    objectId:
      'ari:cloud:jira:DUMMY-158c8204-ff3b-47c2-adbb-a0906ccc722b:issue/19813',
    url: 'https://product-fabric.atlassian.net/browse/FAB-1335',
    name: "FAB-1335 Fetch Contributors' Avatar URLs using Atlassian ID",
    container: 'Fabric',
    icon,
    iconAlt: 'test',
    lastViewedDate: new Date('2016-11-23T22:43:16.989Z'),
    meta: {
      source: 'recent-work',
    },
  },
  {
    objectId:
      'ari:cloud:jira:DUMMY-158c8204-ff3b-47c2-adbb-a0906ccc722b:issue/13401',
    url: 'https://product-fabric.atlassian.net/browse/FAB-386',
    name: 'FAB-386 Send MAU events for home',
    container: 'Fabric',
    icon,
    iconAlt: 'test',
    lastViewedDate: new Date('2016-11-23T22:43:11.836Z'),
    meta: {
      source: 'xp-search',
    },
  },
  {
    objectId:
      'ari:cloud:jira:DUMMY-158c8204-ff3b-47c2-adbb-a0906ccc722b:issue/19508',
    url: 'https://product-fabric.atlassian.net/browse/FAB-1262',
    name: 'FAB-1262 UI: Contributors',
    container: 'Fabric',
    icon,
    iconAlt: 'test',
    lastViewedDate: new Date('2016-11-22T03:53:03.44Z'),
    meta: {
      source: 'recent-work',
    },
  },
  {
    objectId:
      'ari:cloud:confluence:DUMMY-158c8204-ff3b-47c2-adbb-a0906ccc722b:page/34996292',
    url: 'https://product-fabric.atlassian.net/wiki/display/E/Atlassian+Editor+Keyboard+Shortcuts',
    name: 'Atlassian Editor Keyboard Shortcuts',
    container: 'Editor',
    icon,
    iconAlt: 'test',
    lastViewedDate: new Date('2016-11-21T04:05:02.823Z'),
    meta: {
      source: 'xp-search',
    },
  },
  {
    objectId:
      'ari:cloud:jira:DUMMY-158c8204-ff3b-47c2-adbb-a0906ccc722b:issue/16912',
    url: 'https://product-fabric.atlassian.net/browse/FAB-716',
    name: 'FAB-716 Activity: Set redis parameters for session store',
    container: 'Fabric',
    icon,
    iconAlt: 'test',
    lastViewedDate: new Date('2016-11-21T01:18:32.488Z'),
    meta: {
      source: 'recent-work',
    },
  },
  {
    objectId:
      'ari:cloud:jira:DUMMY-158c8204-ff3b-47c2-adbb-a0906ccc722b:issue/18350',
    url: 'https://product-fabric.atlassian.net/browse/FAB-986',
    name: 'FAB-986 Experiment: Refactor to use new scaffolding',
    container: 'Fabric',
    icon,
    iconAlt: 'test',
    lastViewedDate: new Date('2016-11-21T01:17:44.873Z'),
    meta: {
      source: 'xp-search',
    },
  },
  {
    objectId:
      'ari:cloud:jira:DUMMY-158c8204-ff3b-47c2-adbb-a0906ccc722b:issue/19918',
    url: 'https://product-fabric.atlassian.net/browse/FAB-1396',
    name: 'FAB-1396 Investigate how to run experiments against the homepage',
    container: 'Fabric',
    icon,
    iconAlt: 'test',
    lastViewedDate: new Date('2016-11-21T00:25:08.564Z'),
    meta: {
      source: 'recent-work',
    },
  },
  {
    objectId:
      'ari:cloud:confluence:DUMMY-158c8204-ff3b-47c2-adbb-a0906ccc722b:page/34996350',
    url: 'https://product-fabric.atlassian.net/wiki/display/PRODUCT/Planning+-+2016-11-18',
    name: 'Planning - 2016-11-18',
    container: 'Fabric team',
    icon,
    iconAlt: 'test',
    lastViewedDate: new Date('2016-11-17T23:06:22.56Z'),
    meta: {
      source: 'xp-search',
    },
  },
  {
    objectId:
      'ari:cloud:confluence:DUMMY-158c8204-ff3b-47c2-adbb-a0906ccc722b:page/6160400',
    url: 'https://product-fabric.atlassian.net/wiki/display/H/Analytics+Events+Registry',
    name: 'Analytics Events Registry',
    container: 'Home',
    icon,
    iconAlt: 'test',
    lastViewedDate: new Date('2016-11-17T00:02:06.291Z'),
    meta: {
      source: 'recent-work',
    },
  },
  {
    objectId:
      'ari:cloud:jira:DUMMY-158c8204-ff3b-47c2-adbb-a0906ccc722b:issue/19056',
    url: 'https://product-fabric.atlassian.net/browse/FAB-1135',
    name: "FAB-1135 Improve experience in Home if you haven't done anything in the last week -test",
    container: 'Fabric',
    icon,
    iconAlt: 'test',
    lastViewedDate: new Date('2016-11-16T00:11:43.139Z'),
    meta: {
      source: 'xp-search',
    },
  },
  {
    objectId:
      'ari:cloud:jira:DUMMY-158c8204-ff3b-47c2-adbb-a0906ccc722b:issue/18502',
    url: 'https://product-fabric.atlassian.net/browse/FAB-1016',
    name: 'Wait until AID will be resolved on 1st analytics event',
    container: 'Fabric',
    icon,
    iconAlt: 'test',
    lastViewedDate: new Date('2016-11-15T03:03:24.527Z'),
    meta: {
      source: 'recent-work',
    },
  },
  {
    objectId:
      'ari:cloud:jira:DUMMY-158c8204-ff3b-47c2-adbb-a0906ccc722b:issue/19917',
    url: 'https://product-fabric.atlassian.net/browse/FAB-1395',
    name: 'UI: Switch to sidebar layout',
    container: 'Fabric',
    icon,
    iconAlt: 'test',
    lastViewedDate: new Date('2016-11-14T02:26:50.116Z'),
    meta: {
      source: 'xp-search',
    },
  },
  {
    objectId:
      'ari:cloud:jira:DUMMY-158c8204-ff3b-47c2-adbb-a0906ccc722b:issue/20102',
    url: 'https://product-fabric.atlassian.net/browse/FAB-1418',
    name: 'UI: Move from SASS to LESS to be able to consume shared styles from atlaskit',
    container: 'Fabric',
    icon,
    iconAlt: 'test',
    lastViewedDate: new Date('2016-11-14T02:26:45.814Z'),
    meta: {
      source: 'recent-work',
    },
  },
  {
    objectId:
      'ari:cloud:jira:DUMMY-158c8204-ff3b-47c2-adbb-a0906ccc722b:issue/19925',
    url: 'https://product-fabric.atlassian.net/browse/FAB-1403',
    name: 'Remove legacy AID code',
    container: 'Fabric',
    icon,
    iconAlt: 'test',
    lastViewedDate: new Date('2016-11-14T01:19:40.885Z'),
    meta: {
      source: 'xp-search',
    },
  },
  {
    objectId:
      'ari:cloud:jira:DUMMY-158c8204-ff3b-47c2-adbb-a0906ccc722b:issue/20007',
    url: 'https://product-fabric.atlassian.net/browse/FAB-1415',
    name: 'UI: Cache appswitcher items in localstorage',
    container: 'Fabric',
    icon,
    iconAlt: 'test',
    lastViewedDate: new Date('2016-11-10T06:35:57.461Z'),
    meta: {
      source: 'recent-work',
    },
  },
  {
    objectId:
      'ari:cloud:confluence:DUMMY-158c8204-ff3b-47c2-adbb-a0906ccc722b:page/32669769',
    url: 'https://product-fabric.atlassian.net/wiki/display/H/Atlaskit+in+home',
    name: 'Atlaskit in home',
    container: 'Home',
    icon,
    iconAlt: 'test',
    lastViewedDate: new Date('2016-11-09T03:22:01.503Z'),
    meta: {
      source: 'xp-search',
    },
  },
  {
    objectId:
      'ari:cloud:jira:DUMMY-158c8204-ff3b-47c2-adbb-a0906ccc722b:issue/19916',
    url: 'https://product-fabric.atlassian.net/browse/FAB-1394',
    name: 'Investigate if we can switch to PROD AID for e2e testing in staging',
    container: 'Fabric',
    icon,
    iconAlt: 'test',
    lastViewedDate: new Date('2016-11-08T00:54:20.91Z'),
    meta: {
      source: 'recent-work',
    },
  },
  {
    objectId:
      'ari:cloud:jira:DUMMY-158c8204-ff3b-47c2-adbb-a0906ccc722b:issue/19819',
    url: 'https://product-fabric.atlassian.net/browse/FAB-1341',
    name: 'Modify Atlassian home events to fire the same user has as the products',
    container: 'Fabric',
    icon,
    iconAlt: 'test',
    lastViewedDate: new Date('2016-11-04T02:54:36.237Z'),
    meta: {
      source: 'xp-search',
    },
  },
  {
    objectId:
      'ari:cloud:jira:DUMMY-158c8204-ff3b-47c2-adbb-a0906ccc722b:issue/18346',
    url: 'https://product-fabric.atlassian.net/browse/FAB-982',
    name: 'UI: Unlock webpack version from beta22.',
    container: 'Fabric',
    icon,
    iconAlt: 'test',
    lastViewedDate: new Date('2016-11-04T02:10:53.561Z'),
    meta: {
      source: 'recent-work',
    },
  },
  {
    objectId:
      'ari:cloud:jira:DUMMY-158c8204-ff3b-47c2-adbb-a0906ccc722b:issue/19116',
    url: 'https://product-fabric.atlassian.net/browse/FAB-1195',
    name: 'Home icon shows in JIRA but not in Confluence',
    container: 'Fabric',
    icon,
    iconAlt: 'test',
    lastViewedDate: new Date('2016-11-03T05:36:42.106Z'),
    meta: {
      source: 'xp-search',
    },
  },
  {
    objectId:
      'ari:cloud:jira:DUMMY-158c8204-ff3b-47c2-adbb-a0906ccc722b:issue/19601',
    url: 'https://product-fabric.atlassian.net/browse/FAB-1279',
    name: 'Error on homepage when not logged in to Confluence and JIRA',
    container: 'Fabric',
    icon,
    iconAlt: 'test',
    lastViewedDate: new Date('2016-11-03T02:52:27.715Z'),
    meta: {
      source: 'recent-work',
    },
  },
  {
    objectId:
      'ari:cloud:jira:DUMMY-158c8204-ff3b-47c2-adbb-a0906ccc722b:issue/11405',
    url: 'https://product-fabric.atlassian.net/browse/FAB-304',
    name: 'HW - Deployment to first customers',
    container: 'Fabric',
    icon,
    iconAlt: 'test',
    lastViewedDate: new Date('2016-11-03T00:00:22.685Z'),
    meta: {
      source: 'xp-search',
    },
  },
  {
    objectId:
      'ari:cloud:jira:DUMMY-158c8204-ff3b-47c2-adbb-a0906ccc722b:issue/19706',
    url: 'https://product-fabric.atlassian.net/browse/FAB-1314',
    name: 'Zipkin error: TraceKeys Bean not found',
    container: 'Fabric',
    icon,
    iconAlt: 'test',
    lastViewedDate: new Date('2016-11-02T23:52:00.036Z'),
    meta: {
      source: 'recent-work',
    },
  },
  {
    objectId:
      'ari:cloud:jira:DUMMY-158c8204-ff3b-47c2-adbb-a0906ccc722b:issue/19013',
    url: 'https://product-fabric.atlassian.net/browse/FAB-1092',
    name: 'Investigate why Zipkin stopped reporting and fix it  ',
    container: 'Fabric',
    icon,
    iconAlt: 'test',
    lastViewedDate: new Date('2016-11-02T05:28:55.195Z'),
    meta: {
      source: 'xp-search',
    },
  },
  {
    objectId:
      'ari:cloud:confluence:DUMMY-158c8204-ff3b-47c2-adbb-a0906ccc722b:page/14909530',
    url: 'https://product-fabric.atlassian.net/wiki/display/H/View+service+logs+and+metrics',
    name: 'View service logs and metrics',
    container: 'Home',
    icon,
    iconAlt: 'test',
    lastViewedDate: new Date('2016-11-02T03:47:54.642Z'),
    meta: {
      source: 'recent-work',
    },
  },
  {
    objectId:
      'ari:cloud:jira:DUMMY-158c8204-ff3b-47c2-adbb-a0906ccc722b:issue/19099',
    url: 'https://product-fabric.atlassian.net/browse/FAB-1178',
    name: 'Create a Datadog timeboard',
    container: 'Fabric',
    icon,
    iconAlt: 'test',
    lastViewedDate: new Date('2016-11-02T00:20:24.347Z'),
    meta: {
      source: 'xp-search',
    },
  },
  {
    objectId:
      'ari:cloud:jira:DUMMY-158c8204-ff3b-47c2-adbb-a0906ccc722b:issue/19408',
    url: 'https://product-fabric.atlassian.net/browse/FAB-1249',
    name: 'UI: Client-side search',
    container: 'Fabric',
    icon,
    iconAlt: 'test',
    lastViewedDate: new Date('2016-10-24T05:17:25.412Z'),
    meta: {
      source: 'recent-work',
    },
  },
  {
    objectId:
      'ari:cloud:jira:DUMMY-158c8204-ff3b-47c2-adbb-a0906ccc722b:issue/10270',
    url: 'https://product-fabric.atlassian.net/browse/FAB-207',
    name: 'Investigate how we do PubNub',
    container: 'Fabric',
    icon,
    iconAlt: 'test',
    lastViewedDate: new Date('2016-10-24T01:19:20.482Z'),
    meta: {
      source: 'xp-search',
    },
  },
  {
    objectId:
      'ari:cloud:confluence:DUMMY-158c8204-ff3b-47c2-adbb-a0906ccc722b:page/27525135',
    url: 'https://product-fabric.atlassian.net/wiki/display/PRODUCT/Planning+-+2016-10-21',
    name: 'Planning - 2016-10-21',
    container: 'Fabric team',
    icon,
    iconAlt: 'test',
    lastViewedDate: new Date('2016-10-21T00:55:49.158Z'),
    meta: {
      source: 'recent-work',
    },
  },
  {
    objectId:
      'ari:cloud:jira:DUMMY-158c8204-ff3b-47c2-adbb-a0906ccc722b:issue/17115',
    url: 'https://product-fabric.atlassian.net/browse/FAB-744',
    name: 'Allow to pass timestamp for recent item to REST API',
    container: 'Fabric',
    icon,
    iconAlt: 'test',
    lastViewedDate: new Date('2016-10-14T03:12:01.591Z'),
    meta: {
      source: 'xp-search',
    },
  },
  {
    objectId:
      'ari:cloud:jira:DUMMY-158c8204-ff3b-47c2-adbb-a0906ccc722b:issue/19068',
    url: 'https://product-fabric.atlassian.net/browse/FAB-1147',
    name: "Don't fire error event if unauthenticated",
    container: 'Fabric',
    icon,
    iconAlt: 'test',
    lastViewedDate: new Date('2016-10-14T02:14:01.567Z'),
    meta: {
      source: 'recent-work',
    },
  },
  {
    objectId:
      'ari:cloud:confluence:DUMMY-158c8204-ff3b-47c2-adbb-a0906ccc722b:page/24117302',
    url: 'https://product-fabric.atlassian.net/wiki/display/PRODUCT/Planning+-+2016-10-14',
    name: 'Planning - 2016-10-14',
    container: 'Fabric team',
    icon,
    iconAlt: 'test',
    lastViewedDate: new Date('2016-10-13T23:38:28.558Z'),
    meta: {
      source: 'xp-search',
    },
  },
  {
    objectId:
      'ari:cloud:jira:DUMMY-158c8204-ff3b-47c2-adbb-a0906ccc722b:issue/19115',
    url: 'https://product-fabric.atlassian.net/browse/FAB-1194',
    name: 'UI: Move from npm to yarn',
    container: 'Fabric',
    icon,
    iconAlt: 'test',
    lastViewedDate: new Date('2016-10-13T00:51:27.365Z'),
    meta: {
      source: 'recent-work',
    },
  },
  {
    objectId:
      'ari:cloud:confluence:DUMMY-158c8204-ff3b-47c2-adbb-a0906ccc722b:blogpost/25035173',
    url: 'https://product-fabric.atlassian.net/wiki/display/~drichard/2016/10/11/Trying+out+new+PagerDuty+escalation+policy',
    name: 'Trying out new PagerDuty escalation policy',
    container: 'David Richard',
    icon,
    iconAlt: 'test',
    lastViewedDate: new Date('2016-10-11T05:04:39.413Z'),
    meta: {
      source: 'xp-search',
    },
  },
  {
    objectId:
      'ari:cloud:confluence:DUMMY-158c8204-ff3b-47c2-adbb-a0906ccc722b:page/25035143',
    url: 'https://product-fabric.atlassian.net/wiki/display/H/PubNub+Integration+in+Home+and+Activity',
    name: 'PubNub Integration in Home and Activity',
    container: 'Home',
    icon,
    iconAlt: 'test',
    lastViewedDate: new Date('2016-10-11T03:21:51.021Z'),
    meta: {
      source: 'xp-search',
    },
  },
  {
    objectId:
      'ari:cloud:jira:DUMMY-158c8204-ff3b-47c2-adbb-a0906ccc722b:issue/18406',
    url: 'https://product-fabric.atlassian.net/browse/FAB-1005',
    name: 'UI: Get cloud id and filter items by site',
    container: 'Fabric',
    icon,
    iconAlt: 'test',
    lastViewedDate: new Date('2016-10-10T05:08:21.639Z'),
    meta: {
      source: 'xp-search',
    },
  },
  {
    objectId:
      'ari:cloud:jira:DUMMY-158c8204-ff3b-47c2-adbb-a0906ccc722b:issue/18903',
    url: 'https://product-fabric.atlassian.net/browse/FAB-1069',
    name: 'Add Hermant to the experiment to flush analytics queue in JIRA & Confluence as well',
    container: 'Fabric',
    icon,
    iconAlt: 'test',
    lastViewedDate: new Date('2016-10-09T23:49:03.872Z'),
    meta: {
      source: 'recent-work',
    },
  },
  {
    objectId:
      'ari:cloud:jira:DUMMY-158c8204-ff3b-47c2-adbb-a0906ccc722b:issue/18905',
    url: 'https://product-fabric.atlassian.net/browse/FAB-1071',
    name: 'Make sure all enrolled instances have the connect addon',
    container: 'Fabric',
    icon,
    iconAlt: 'test',
    lastViewedDate: new Date('2016-10-05T05:49:14.404Z'),
    meta: {
      source: 'xp-search',
    },
  },
  {
    objectId:
      'ari:cloud:confluence:DUMMY-158c8204-ff3b-47c2-adbb-a0906ccc722b:page/19333475',
    url: 'https://product-fabric.atlassian.net/wiki/display/H/Home+opt-in+requests',
    name: 'Home opt-in requests',
    container: 'Home',
    icon,
    iconAlt: 'test',
    lastViewedDate: new Date('2016-10-05T05:45:48.571Z'),
    meta: {
      source: 'recent-work',
    },
  },
];

export default data;
