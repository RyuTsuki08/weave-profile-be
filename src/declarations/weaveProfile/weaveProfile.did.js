export const idlFactory = ({ IDL }) => {
  const InitOptions = IDL.Record({ 'admins' : IDL.Vec(IDL.Principal) });
  const Error__1 = IDL.Variant({
    'Immutable' : IDL.Null,
    'NotFound' : IDL.Null,
    'NotAuthorized' : IDL.Null,
    'Unauthorized' : IDL.Null,
    'AlreadyExists' : IDL.Null,
    'InvalidRequest' : IDL.Null,
    'AuthorizedPrincipalLimitReached' : IDL.Nat,
    'FailedToWrite' : IDL.Text,
  });
  const Result_4 = IDL.Variant({ 'ok' : IDL.Null, 'err' : Error__1 });
  const CeSo = IDL.Record({
    'tiktok' : IDL.Opt(IDL.Text),
    'twitter' : IDL.Opt(IDL.Text),
    'instagram' : IDL.Opt(IDL.Text),
    'facebook' : IDL.Opt(IDL.Text),
    'discord' : IDL.Opt(IDL.Text),
  });
  const DeSo = IDL.Record({
    'distrikt' : IDL.Opt(IDL.Text),
    'dscvr' : IDL.Opt(IDL.Text),
    'openChat' : IDL.Opt(IDL.Text),
  });
  const Socials = IDL.Record({
    'ceSo' : IDL.Opt(CeSo),
    'deSo' : IDL.Opt(DeSo),
  });
  const Bio = IDL.Record({
    'familyName' : IDL.Opt(IDL.Text),
    'about' : IDL.Opt(IDL.Text),
    'username' : IDL.Opt(IDL.Text),
    'displayName' : IDL.Opt(IDL.Text),
    'socials' : IDL.Opt(Socials),
    'givenName' : IDL.Opt(IDL.Text),
    'email' : IDL.Opt(IDL.Text),
    'phone' : IDL.Opt(IDL.Text),
    'location' : IDL.Opt(IDL.Text),
  });
  const Callback = IDL.Func([], [], []);
  const WriteAsset = IDL.Variant({
    'Init' : IDL.Record({
      'id' : IDL.Text,
      'size' : IDL.Nat,
      'callback' : IDL.Opt(Callback),
    }),
    'Chunk' : IDL.Record({
      'id' : IDL.Text,
      'chunk' : IDL.Vec(IDL.Nat8),
      'callback' : IDL.Opt(Callback),
    }),
  });
  const AssetRequest = IDL.Variant({
    'Put' : IDL.Record({
      'key' : IDL.Text,
      'contentType' : IDL.Text,
      'callback' : IDL.Opt(Callback),
      'payload' : IDL.Variant({
        'StagedData' : IDL.Null,
        'Payload' : IDL.Vec(IDL.Nat8),
      }),
    }),
    'Remove' : IDL.Record({ 'key' : IDL.Text, 'callback' : IDL.Opt(Callback) }),
    'StagedWrite' : WriteAsset,
  });
  const ProfileUpdate = IDL.Record({
    'bio' : Bio,
    'avatarRequest' : AssetRequest,
  });
  const Error = IDL.Variant({
    'Immutable' : IDL.Null,
    'NotFound' : IDL.Null,
    'NotAuthorized' : IDL.Null,
    'Unauthorized' : IDL.Null,
    'AlreadyExists' : IDL.Null,
    'InvalidRequest' : IDL.Null,
    'AuthorizedPrincipalLimitReached' : IDL.Nat,
    'FailedToWrite' : IDL.Text,
  });
  const Result = IDL.Variant({ 'ok' : IDL.Null, 'err' : Error });
  const Profile = IDL.Record({ 'id' : IDL.Principal, 'bio' : Bio });
  const Result_3 = IDL.Variant({
    'ok' : IDL.Vec(IDL.Tuple(IDL.Principal, Profile)),
    'err' : Error__1,
  });
  const TokenIdentifier = IDL.Text;
  const CommonError = IDL.Variant({
    'InvalidToken' : TokenIdentifier,
    'Other' : IDL.Text,
  });
  const Result_2 = IDL.Variant({
    'ok' : IDL.Vec(IDL.Text),
    'err' : CommonError,
  });
  const Asset = IDL.Record({
    'contentType' : IDL.Text,
    'payload' : IDL.Vec(IDL.Vec(IDL.Nat8)),
  });
  const Result_1 = IDL.Variant({
    'ok' : IDL.Tuple(IDL.Opt(Profile), IDL.Opt(Asset)),
    'err' : Error,
  });
  const anon_class_23_1 = IDL.Service({
    'addNewAdmin' : IDL.Func([IDL.Vec(IDL.Principal)], [Result_4], []),
    'createProfile' : IDL.Func([ProfileUpdate], [Result], []),
    'deleteProfile' : IDL.Func([AssetRequest], [Result], []),
    'getAllProfiles' : IDL.Func([], [Result_3], []),
    'getDiscordHolders' : IDL.Func([IDL.Text], [Result_2], []),
    'readProfile' : IDL.Func([], [Result_1], ['query']),
    'updateProfile' : IDL.Func([ProfileUpdate], [Result], []),
  });
  return anon_class_23_1;
};
export const init = ({ IDL }) => {
  const InitOptions = IDL.Record({ 'admins' : IDL.Vec(IDL.Principal) });
  return [InitOptions];
};
