import { header } from '../components/header';
import { main } from '../components/main';
import { footer } from '../components/footer';

class App {
  public start() {
    document.body.append(header.getNode(), main.getNode(), footer.getNode());
  }
}

export const app = new App();
