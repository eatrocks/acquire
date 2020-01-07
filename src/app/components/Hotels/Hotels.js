
export default ({hotels={}}) => (
    <ul>
        {
            Object.keys(hotels).map( (hotel, i) =>
                <li key={i}>{hotel.name} ({hotel.availableShares})</li>
            )
        }
    </ul>
);
