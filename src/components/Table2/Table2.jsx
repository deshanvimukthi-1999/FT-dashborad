import "./table2.scss";


export default function Table2() {
  return (
    <div className="table2">
      <div className="row ">
          <div className="col-12 w-100">
            <h2>Driver Details</h2>
              <form className="p-4">
                <div className="form-group row">
                  <label for="inputPassword" className="col-sm-2 col-form-label">Driver Name</label>
                    <div className="col-sm-5">
                      <input type="password" className="form-control" id="inputPassword" placeholder=" " />
                    </div>
                </div>
                <div className="d-flex">
                <div className="form-group row mt-4">
                  <label for="inputPassword" className="col-sm-2 col-form-label">Division</label>
                  <div class="col-sm-8">
                    <input type="password" className="form-control" id="inputPassword" placeholder=" " />
                  </div>
                </div>

                <div className="form-group row mt-4">
                  <label for="inputPassword" className="col-sm-2 col-form-label">Division</label>
                  <div class="col-sm-8">
                    <input type="password" className="form-control" id="inputPassword" placeholder=" " />
                  </div>
                </div>
                </div>
              </form>
            </div>  

            <h2>Driver Details</h2>
              <form className="p-4">
                <div className="form-group row">
                  <label for="inputPassword" className="col-sm-2 col-form-label">Driver Name</label>
                    <div className="col-sm-5">
                      <input type="password" className="form-control" id="inputPassword" placeholder=" " />
                    </div>
                </div>
                <div className="d-flex">
                <div className="form-group row mt-4">
                  <label for="inputPassword" className="col-sm-2 col-form-label">Division</label>
                  <div class="col-sm-5">
                    <input type="password" className="form-control" id="inputPassword" placeholder=" " />
                  </div>
                </div>

                <div className="form-group row mt-4">
                  <label for="inputPassword" className="col-sm-2 col-form-label">Division</label>
                  <div class="col-sm-5 ">
                    <input type="password" className="form-control" id="inputPassword" placeholder=" " />
                  </div>
                </div>
                
                </div>

                <div className="form-group row mt-4">
                  <label for="inputPassword" className="col-sm-2 col-form-label">Driver Name</label>
                    <div className="col-sm-5">
                      <input type="password" className="form-control" id="inputPassword" placeholder=" " />
                    </div>
                </div>
              

              <div className="btn-group btn-group-toggle mt-5 align-items-center" data-toggle="buttons">
                <label className="btn btn-secondary active"> 
                Driving License No
                </label>
                <label className="btn btn-secondary">
                  Issue Date
                </label>
                <label class="btn btn-secondary">
                  Expire Date
                </label>
                <label class="btn btn-secondary">
                  Vehicle Class
                </label>
              </div>

              <div className="align-items-center p-5">
                <button type="button" class="btn btn-primary btn-sm">Large button</button>
                <button type="button" class="btn btn-secondary btn-sm">Large button</button>
              </div>
            </form>    
            </div>                        
        </div>                   
   
  
  );
}