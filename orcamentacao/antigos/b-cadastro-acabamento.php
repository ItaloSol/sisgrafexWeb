              <!-- Div da Direita (Cadastro de Acabamentos) -->
              <div class="row">
                <div class="col-xl">
                  <div class="card mb-4">
                    <div class="card-header d-flex justify-content-between align-items-center">
                      <h5 class="mb-0">Cadastro de Acabamentos</h5>                    
                    </div>
                    <div class="card-body">
                      <form>
                        <div class="mb-3">
                          <label class="form-label" for="basic-default-fullname">Nome da Máquina</label>
                          <input type="text" class="form-control" id="basic-default-fullname" placeholder="Insira o Nome da Máquina" />
                        </div>
                        <div class="mb-3">
                          <label class="form-label" for="basic-default-company">Custo por Hora</label>
                          <input type="text" class="form-control" id="basic-default-company" placeholder="Insira o custo por hora" />
                        </div>
                        
                        <button type="submit" class="btn btn-primary">Cadastrar</button>
                      </form>
                    </div>
                  </div>
                </div>  
                <!-- Menu Lateral Direita (Consulta)-->
                <div class="col-xl">
                  <div class="card mb-4">
                    <div class="card-header d-flex justify-content-between align-items-center">
                      <h5 class="mb-0">Consultar</h5>
                    </div>
                    <div class="card-body">
                      <form>
                      <div class="mb-3">
                        <label for="exampleFormControlSelect1" class="form-label">Tipo de Endereço</label>
                        <select class="form-select" id="exampleFormControlSelect1" aria-label="Default select example">
                          <option selected>Selecione o tipo de endereço</option>
                          <option value="1">Código</option>
                          <option value="2">Nome Máquina</option>
                          <option value="3">Máquina Ativa</option>
                        </select>
                      </div>
                      <div class="mb-3">
                          <label class="form-label" for="basic-default-fullname"></label>
                          <input type="text" class="form-control" id="basic-default-fullname" placeholder="" /><br></br>
                          <button type="submit" class="btn btn-primary">Pesquisar</button>
                          <button type="submit" class="btn btn-primary">Mostrar Todos</button>
                        </div>                      
                     </div>
                        </div>                      
                          </div>
                        </div>
                        <div class="card-body">
                      <small class="text-light fw-semibold"></small>
                      <div class="demo-inline-spacing">
                        
                        <button type="button" class="btn btn-secondary">Desativar Máquina</button>
                        <button type="button" class="btn btn-success">Ativar Máquina</button>
                        <button type="button" class="btn btn-danger">Selecionar</button>                  
                        </div><br></br>
                        <!-- Tabela de consulta e edição--> 
                        <div style = "height: 500px; " class ="card">
                <h5 class="card-header">Resultado</h5>
                <div class="card-body">
                  <div class="table-responsive text-nowrap">
                    <table class="table table-bordered">
                      <thead>
                        <tr>
                          <th>Código</th>
                          <th>Máquina</th>
                          <th>Ativa</th>
                          <th>Custo Hora</th>
                          <th>Editar</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            <i class="fab fa-angular fa-lg text-danger me-3"></i> <strong>Angular Project</strong>
                          </td>
                          <td>Albert Cook</td>
                          <td>
                            <ul class="list-unstyled users-list m-0 avatar-group d-flex align-items-center">
                              <li
                                data-bs-toggle="tooltip"
                                data-popup="tooltip-custom"
                                data-bs-placement="top"
                                class="avatar avatar-xs pull-up"
                                title="Lilian Fuller"
                              >
                                <img src="../assets/img/avatars/5.png" alt="Avatar" class="rounded-circle" />
                              </li>
                              <li
                                data-bs-toggle="tooltip"
                                data-popup="tooltip-custom"
                                data-bs-placement="top"
                                class="avatar avatar-xs pull-up"
                                title="Sophia Wilkerson"
                              >
                                <img src="../assets/img/avatars/6.png" alt="Avatar" class="rounded-circle" />
                              </li>
                              <li
                                data-bs-toggle="tooltip"
                                data-popup="tooltip-custom"
                                data-bs-placement="top"
                                class="avatar avatar-xs pull-up"
                                title="Christina Parker"
                              >
                                <img src="../assets/img/avatars/7.png" alt="Avatar" class="rounded-circle" />
                              </li>
                            </ul>
                          </td>
                          <td><span class="badge bg-label-primary me-1">Active</span></td>
                          <td>
                            <div class="dropdown">
                              <button
                                type="button"
                                class="btn p-0 dropdown-toggle hide-arrow"
                                data-bs-toggle="dropdown"
                              >
                                <i class="bx bx-dots-vertical-rounded"></i>
                              </button>
                              <div class="dropdown-menu">
                                <a class="dropdown-item" href="javascript:void(0);"
                                  ><i class="bx bx-edit-alt me-1"></i> Edit</a
                                >
                                <a class="dropdown-item" href="javascript:void(0);"
                                  ><i class="bx bx-trash me-1"></i> Delete</a
                                >
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td><i class="fab fa-react fa-lg text-info me-3"></i> <strong>React Project</strong></td>
                          <td>Barry Hunter</td>
                          <td>
                            <ul class="list-unstyled users-list m-0 avatar-group d-flex align-items-center">
                              <li
                                data-bs-toggle="tooltip"
                                data-popup="tooltip-custom"
                                data-bs-placement="top"
                                class="avatar avatar-xs pull-up"
                                title="Lilian Fuller"
                              >
                                <img src="../assets/img/avatars/5.png" alt="Avatar" class="rounded-circle" />
                              </li>
                              <li
                                data-bs-toggle="tooltip"
                                data-popup="tooltip-custom"
                                data-bs-placement="top"
                                class="avatar avatar-xs pull-up"
                                title="Sophia Wilkerson"
                              >
                                <img src="../assets/img/avatars/6.png" alt="Avatar" class="rounded-circle" />
                              </li>
                              <li
                                data-bs-toggle="tooltip"
                                data-popup="tooltip-custom"
                                data-bs-placement="top"
                                class="avatar avatar-xs pull-up"
                                title="Christina Parker"
                              >
                                <img src="../assets/img/avatars/7.png" alt="Avatar" class="rounded-circle" />
                              </li>
                            </ul>
                          </td>
                          <td><span class="badge bg-label-success me-1">Completed</span></td>
                          <td>
                            <div class="dropdown">
                              <button
                                type="button"
                                class="btn p-0 dropdown-toggle hide-arrow"
                                data-bs-toggle="dropdown"
                              >
                                <i class="bx bx-dots-vertical-rounded"></i>
                              </button>
                              <div class="dropdown-menu">
                                <a class="dropdown-item" href="javascript:void(0);"
                                  ><i class="bx bx-edit-alt me-1"></i> Edit</a
                                >
                                <a class="dropdown-item" href="javascript:void(0);"
                                  ><i class="bx bx-trash me-1"></i> Delete</a
                                >
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td><i class="fab fa-vuejs fa-lg text-success me-3"></i> <strong>VueJs Project</strong></td>
                          <td>Trevor Baker</td>
                          <td>
                            <ul class="list-unstyled users-list m-0 avatar-group d-flex align-items-center">
                              <li
                                data-bs-toggle="tooltip"
                                data-popup="tooltip-custom"
                                data-bs-placement="top"
                                class="avatar avatar-xs pull-up"
                                title="Lilian Fuller"
                              >
                                <img src="../assets/img/avatars/5.png" alt="Avatar" class="rounded-circle" />
                              </li>
                              <li
                                data-bs-toggle="tooltip"
                                data-popup="tooltip-custom"
                                data-bs-placement="top"
                                class="avatar avatar-xs pull-up"
                                title="Sophia Wilkerson"
                              >
                                <img src="../assets/img/avatars/6.png" alt="Avatar" class="rounded-circle" />
                              </li>
                              <li
                                data-bs-toggle="tooltip"
                                data-popup="tooltip-custom"
                                data-bs-placement="top"
                                class="avatar avatar-xs pull-up"
                                title="Christina Parker"
                              >
                                <img src="../assets/img/avatars/7.png" alt="Avatar" class="rounded-circle" />
                              </li>
                            </ul>
                          </td>
                          <td><span class="badge bg-label-info me-1">Scheduled</span></td>
                          <td>
                            <div class="dropdown">
                              <button
                                type="button"
                                class="btn p-0 dropdown-toggle hide-arrow"
                                data-bs-toggle="dropdown"
                              >
                                <i class="bx bx-dots-vertical-rounded"></i>
                              </button>
                              <div class="dropdown-menu">
                                <a class="dropdown-item" href="javascript:void(0);"
                                  ><i class="bx bx-edit-alt me-1"></i> Edit</a
                                >
                                <a class="dropdown-item" href="javascript:void(0);"
                                  ><i class="bx bx-trash me-1"></i> Delete</a
                                >
                              </div>
                            </div>
                          </td>
                        </tr>
                        <tr>
                          <td>
                            <i class="fab fa-bootstrap fa-lg text-primary me-3"></i> <strong>Bootstrap Project</strong>
                          </td>
                          <td>Jerry Milton</td>
                          <td>
                            <ul class="list-unstyled users-list m-0 avatar-group d-flex align-items-center">
                              <li
                                data-bs-toggle="tooltip"
                                data-popup="tooltip-custom"
                                data-bs-placement="top"
                                class="avatar avatar-xs pull-up"
                                title="Lilian Fuller"
                              >
                                <img src="../assets/img/avatars/5.png" alt="Avatar" class="rounded-circle" />
                              </li>
                              <li
                                data-bs-toggle="tooltip"
                                data-popup="tooltip-custom"
                                data-bs-placement="top"
                                class="avatar avatar-xs pull-up"
                                title="Sophia Wilkerson"
                              >
                                <img src="../assets/img/avatars/6.png" alt="Avatar" class="rounded-circle" />
                              </li>
                              <li
                                data-bs-toggle="tooltip"
                                data-popup="tooltip-custom"
                                data-bs-placement="top"
                                class="avatar avatar-xs pull-up"
                                title="Christina Parker"
                              >
                                <img src="../assets/img/avatars/7.png" alt="Avatar" class="rounded-circle" />
                              </li>
                            </ul>
                          </td>
                          <td><span class="badge bg-label-warning me-1">Pending</span></td>
                          <td>
                            <div class="dropdown">
                              <button
                                type="button"
                                class="btn p-0 dropdown-toggle hide-arrow"
                                data-bs-toggle="dropdown"
                              >
                                <i class="bx bx-dots-vertical-rounded"></i>
                              </button>
                              <div class="dropdown-menu">
                                <a class="dropdown-item" href="javascript:void(0);"
                                  ><i class="bx bx-edit-alt me-1"></i> Edit</a
                                >
                                <a class="dropdown-item" href="javascript:void(0);"
                                  ><i class="bx bx-trash me-1"></i> Delete</a
                                >
                              </div>
                            </div>
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
                            