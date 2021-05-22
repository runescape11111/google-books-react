function SearchForm() {
    return (
        <div className="card bg-dark mx-5">
            <div className="card-header">
                <h2 className="text-light">
                    Search Book
                </h2>
            </div>
            <div className="card-text">
                <form>
                    <div className="form-group row">
                        <label htmlFor="search-book" className="col-sm-1 col-form-label text-light text-right pt-4">Book Title</label>
                        <div className="col-sm-10 pt-3">
                            <input type="text" className="form-control" id="search-book" placeholder="Search a book" />
                        </div>
                        <div className="col-sm-1 pt-3">
                            <button type="submit" className="btn btn-light px-4">Search</button>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
};

export default SearchForm;