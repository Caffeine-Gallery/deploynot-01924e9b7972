export const idlFactory = ({ IDL }) => {
  return IDL.Service({
    'getCounter' : IDL.Func([], [IDL.Nat], ['query']),
    'greet' : IDL.Func([IDL.Text], [IDL.Text], []),
    'increment' : IDL.Func([], [IDL.Nat], []),
  });
};
export const init = ({ IDL }) => { return []; };
