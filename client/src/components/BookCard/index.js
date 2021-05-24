function BookCard({book, handleSave}) {
    const vol = book.volumeInfo;
    const authors = vol.authors.join(", ");
    return (
        <div className="card bg-dark mx-3 my-3 border-light">
            <div className="card-header text-light border-light">
                <h3 className="card-title">
                    {vol.title}
                </h3>
                <div className="card-subtitle">
                    Written by {authors}
                </div>
            </div>
            <div className="card-text container-fluid">
                <div className="row">
                    <div className="col-12 col-sm-3 col-md-2 py-3">
                        <img className="img-responsive w-100" src={vol.imageLinks.thumbnail} alt={vol.title} />
                    </div>
                    <div className="col-12 col-sm-9 col-md-10 py-3">
                        <div className="row">
                            <div className="col-12">
                                <h4 className="text-light">
                                    Description
                                </h4>
                            </div>
                            <div className="col-12">
                                <p className="text-light">
                                    {vol.description}
                                </p>
                            </div>
                            <div className="col-12 d-flex justify-content-end">
                                <button className="btn btn-success ml-4 px-4" onClick={handleSave}>Save</button>
                                <a href={vol.infoLink} target="_blank" rel="noreferrer" className="btn btn-light ml-4 px-4">View</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
};

export default BookCard;