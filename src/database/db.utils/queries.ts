export const identityQuery = (search, casing) => ({
  $or: [
    {
      username: {
        $regex: `^${search}$`,
        // ^ = Starts with
        $options: casing ? '' : 'i', // i = case insensitive
      },
    },
    { fullName: search },
    { code: search },
    { _id: search },
    { id: search },
  ],
});

export const namesQuery = (search, casing = false) => ({
  $or: [
    {
      username: {
        $regex: `^${search}$`,
        // ^ = Starts with
        $options: casing ? '' : 'i', // i = case insensitive
      },
    },
    { fullName: search },
  ],
});
