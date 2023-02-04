import { buildConfig } from 'payload/config';
import path from 'path';
// import Examples from './collections/Examples';
import Users from './collections/Users';
import Category from './collections/Category';
import Media from './collections/Media';
import FormSubmission from './collections/FormSubmission';
import Page from './collections/Page';
import Study from './collections/Study';
import MegaMenu from './globals/MegaMenu';
import SocialMedia from './globals/SocialMedia';
import Footer from './globals/Footer';

export default buildConfig({
  serverURL: 'http://localhost:4000',
  admin: {
    user: Users.slug,
  },
  collections: [
    Media,
    Page,
    Study,
    Category,
    FormSubmission,
    // Add Collections here
    // Examples,
    Users,
  ],
  globals: [MegaMenu, SocialMedia, Footer],
  typescript: {
    outputFile: path.resolve(__dirname, 'payload-types.ts'),
  },
  graphQL: {
    schemaOutputFile: path.resolve(__dirname, 'generated-schema.graphql'),
  },
});
