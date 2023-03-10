import '../index.css';
import 'bootstrap/dist/css/bootstrap.css';
function Footer() {
    return (
      <footer class="footer">
      <div class="container" id='contact'>
          <div class="row">
              <div class="col-md-5">
                  <h5><i class="fa fa-road"></i> ACME CO INC.</h5>
                  <div class="row">
                      <div class="col-6">
                          <ul class="list-unstyled">
                              <li><a href="/a">Product</a></li>
                              <li><a href="/a">Benefits</a></li>
                              <li><a href="/a">Partners</a></li>
                              <li><a href="/a">Team</a></li>
                          </ul>
                      </div>
                      <div class="col-6">
                          <ul class="list-unstyled">
                              <li><a href="/a">Documentation</a></li>
                              <li><a href="/a">Support</a></li>
                              <li><a href="/a">Legal Terms</a></li>
                              <li><a href="/a">About</a></li>
                          </ul>
                      </div>
                  </div>
                  <ul class="nav">
                      <li class="nav-item"><a href="/a" class="nav-link pl-0"><i class="fa fa-facebook fa-lg"></i></a></li>
                      <li class="nav-item"><a href="/a" class="nav-link"><i class="fa fa-twitter fa-lg"></i></a></li>
                      <li class="nav-item"><a href="/a" class="nav-link"><i class="fa fa-github fa-lg"></i></a></li>
                      <li class="nav-item"><a href="/a" class="nav-link"><i class="fa fa-instagram fa-lg"></i></a></li>
                  </ul>
                  <br />
              </div>
              <div class="col-md-2">
                  <h5 class="text-md-right">Contact Us</h5>
                  <hr />
              </div>
              <div class="col-md-5">
                  <form>
                      <fieldset class="form-group">
                          <input type="email" class="form-control" id="exampleInputEmail1" placeholder="Enter email" />
                      </fieldset>
                      <fieldset class="form-group">
                          <textarea class="form-control" id="exampleMessage" placeholder="Message"></textarea>
                      </fieldset>
                      <fieldset class="form-group text-xs-right">
                          <button type="button" class="btn btn-secondary-outline btn-lg">Send</button>
                      </fieldset>
                  </form>
              </div>
          </div>
      </div>
  </footer>
    );
  }
  
  export default Footer;
  