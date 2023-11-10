// server_express/api/line.ts
import { ClientConfig, Client, middleware, MiddlewareConfig, WebhookEvent, TextMessage, } from '@line/bot-sdk'
const channelAccessToken = process.env.CHANNEL_ACCESS_TOKEN || ''
const channelSecret = process.env.CHANNEL_SECRET || ''
const clientConfig: ClientConfig = {
  channelAccessToken,
  channelSecret,
}
const middlewareConfig: MiddlewareConfig = {
  channelAccessToken,
  channelSecret
}
const client = new Client(clientConfig)

// express
import express, { Application, Request, Response } from 'express'
const app: Application = express()

app.post("/webhook",
  middleware(middlewareConfig),
  async (req: Request, res: Response,) => {
    const events: WebhookEvent[] = req.body.events
    const results = await Promise.all(
      events.map(async (event: WebhookEvent) => {
        return handleMessageEvent(event)
      })
    )
    return res.status(200).json({
      status: 'success',
      results,
    })
  }
)

const handleMessageEvent = async (event: WebhookEvent) => {
  if (event.type === 'message' && event.message.type === 'text') {
    const replyMessage: TextMessage = { type: 'text',text }
    return client.replyMessage(replyToken, replyMessage)
  }
  ・・・
}

export default fromNodeMiddleware(app) // <- これがポイント