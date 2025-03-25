export default function Logo() {
    return (
        <>
            <svg width="100" height="100" viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
                {/* <!-- Outer Orange Square --> */}
                <rect width="100" height="100" x="50" y="50" transform="rotate(45 100 100)" className="fill-orange-500"/>
                
                {/* <!-- Transparent Inner Square (Cut-out Effect) --> */}
                <rect width="80" height="80" x="60" y="60" fill="black" transform="rotate(45 100 100)"/>

                {/* <!-- Centered Text --> */}
                <text x="100" y="105" fontSize="18" fontFamily="Arial, sans-serif" fill="white" fontWeight="bold" textAnchor="middle">
                    BitFortress
                </text>
            </svg>
        </>
    )
}