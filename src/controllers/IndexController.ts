import {Constant, Controller, Inject, InjectorService} from "@tsed/di";
import {SwaggerSettings} from "@tsed/swagger";
import {Get, Hidden, Returns} from "@tsed/schema";

@Hidden()
@Controller("/")
export class IndexCtrl {
  @Constant("swagger")
  swagger: SwaggerSettings[];

  @Inject()
  injector: InjectorService;

  @Get("/")
  @Returns(200).ContentType("application/json")
  get() {
    return {
      name: "Hello",
      version: "0.0.1",
      description: "An REST API with Ts.ED",
      author: "Romakita"
    };
  }
}
