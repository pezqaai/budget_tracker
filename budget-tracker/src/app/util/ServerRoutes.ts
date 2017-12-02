export class Routes {
  static LOGIN: String = 'user/login';
  static REGISTER: String = 'user/register';
  static LOGOUT: String = 'user/logout';
  static USER: String = 'user'
  static BUDGETS: String = 'budgets';
}

export class Server {
  private static address: String = 'localhost';
  private static port: String = '4200';
  private static prefix: String = 'api';

  static routeTo(route: String) {
    return `http://${Server.address}:${Server.port}/${Server.prefix}/${route}`
  }
}
