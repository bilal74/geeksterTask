const ItemWidget = (props) => {
    const { title, id } = props;
    return (
      <div className="col-md-12 my-1" id={id}>
        <div class="row p-3">
          <div className="col">
            {" "}
            <p className="my-auto">{title}</p>
          </div>
          <div className="col">
            <button className="btn btn-sm btn-outline-info mx-2" onClick={()=>props.edit(id,title)}>edit</button>
            <button className="btn btn-sm btn-outline-danger mx-2" onClick={()=>props.delete(id)}>
              delete
            </button>
            <button className="btn btn-sm btn-outline-secondary mx-2" onClick={()=>props.complete(id)}>
              complete
            </button>
          </div>
        </div>
      </div>
    );
  };
  
  const CompleteWidget = (props) => {
    const { title, id ,date} = props;
    return (
      <div className="col-md-12 my-1" id={id}>
        <div class="row p-3">
          <div className="col">
          
            <p className="my-auto">{title}</p>
          </div>
          <div className="col d-flex">
          <p className="my-auto mx-4">{date}</p>
            <button className="btn btn-sm btn-outline-danger mx-2 " onClick={()=>props.delete(id)}>
              delete
            </button>
         
          </div>
        </div>
      </div>
    );
  };
  const UpcomingWidget = (props) => {
    const { title, id ,date} = props;
    return (
      <div className="col-md-12 my-1" id={id}>
        <div class="row p-3">
          <div className="col">
          
            <p className="my-auto">{title}</p>
          </div>
          <div className="col d-flex">
          <p className="my-auto mx-4">done on {date}</p>
            <button className="btn btn-sm btn-outline-danger mx-2 ">
              delete
            </button>
         </div>
        </div>
      </div>
    );
  };
  export {ItemWidget,CompleteWidget,UpcomingWidget};