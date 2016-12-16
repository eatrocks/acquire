
export default ({hotels=[]}) => (
    <ul>
        {
            hotels.map( (hotel, i) =>
                <li key={i}>{hotel.name} ({hotel.availableShares})</li>
            )
        }
    </ul>
);
