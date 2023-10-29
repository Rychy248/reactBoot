

function renderComponent({Component, argsForComp, title, footer, key}) {
    return (
        <div key={key} className="row align-items-start">
                <div className="card text-center border-primary mb-3">
                    <div className="card-header border-warning">{title}</div>
                    <div className="card-body">
                        <Component {...argsForComp} />
                    </div>
                { footer && <div className="card-footer text-body-secondary">{footer}</div>}
            </div>
        </div>
    );
};

export default function Sectionalize({components}) {
    return<>
        {
            components.map((component, index)=> renderComponent({...component, key:index}))
        }
    </>;
};
