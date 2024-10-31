import './Contact.css'

const Contact = () => {
    return (
        <main className="container">
            <h2 className="title-C">Contacto</h2>
            <aside className="container-contact">
                <div className="checkbox-group">
                    {[...Array(11)].map((_, index) => (
                        <div key={index} className="checkbox-item">
                            <input type="checkbox" id={`checkbox-${index}`} />
                            <label htmlFor={`checkbox-${index}`}>not selected</label>
                        </div>
                    ))}
                </div>
            </aside>
            <aside className="container-contact">
                <div className="radio-group">
                    {[...Array(13)].map((_, index) => (
                        <div key={index} className="radio-item">
                            <input type="radio" name="options" id={`radio-${index}`} />
                            <label htmlFor={`radio-${index}`}>option 2</label>
                        </div>
                    ))}
                </div>
            </aside>
        </main>
    )
}

export default Contact