export const names = ['American', 'Continental', 'Festival', 'Imperial', 'Sackson', 'Tower', 'Worldwide' ];

export default () =>  names.map((name) => ({
      name: name,
      //size: 0,
      availableShares: 25
    })
);
