function CardHeader({children}) {
    return (
        <div className="card-header border-light">
            <h2 className="text-light">
                {children}
            </h2>
        </div>
    )
};

export default CardHeader;