class UserAppMetadata {
  provider!: string;
}

export default class {
  id!: string;
  app_metadata!: UserAppMetadata;
  aud!: string;
  confirmation_sent_at!: string;
  confirmed_at!: string;
  created_at!: string;
  email!: string;
  last_sign_in_at!: string;
  role!: string;
  updated_at!: string;
  user_metadata?: any;
}
