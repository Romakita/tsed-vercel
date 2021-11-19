import {PlatformExpress} from "@tsed/platform-express";
import {PlatformBuilder} from "@tsed/common";
import {Server} from "./Server";

// WITH FULL http server
// async function bootstrap() {
//   const platform = await PlatformExpress.bootstrap(Server, {
//     httpsPort: false,
//     httpPort: process.env.PORT || 3000,
//     disableComponentsScan: true
//   });
//
//   await platform.listen();
//
//   return platform;
// }
//
// bootstrap();


// WITH PURE Serverless function without http server
const platform = PlatformBuilder.create(Server, {
  adapter: PlatformExpress,
  httpsPort: false,
  httpPort: false,
  // disable componentsScan to avoid performance issue about glob pattern usage.
  disableComponentsScan: true
});

const promise = platform.bootstrap();

export default async function (req: any, res: any) {
  try {
    await promise;
    platform.callback(req, res);
  } catch (er) {
    console.error("Exception", er);
  }
}
