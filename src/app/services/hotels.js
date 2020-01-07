
const names = ['American', 'Continental', 'Festival', 'Imperial', 'Sackson', 'Tower', 'Worldwide' ];

export default () => names.reduce(
    (acc, name) => {
        return {
            ...acc,
            name: {
                name: name,
                size: 0,
                myShares: 0,
                availableShares: 25
            }
        };
    },
    {}
);
