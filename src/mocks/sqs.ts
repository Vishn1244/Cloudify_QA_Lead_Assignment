import {
  SQSClient,
  SendMessageCommand,
  ReceiveMessageCommand,
  DeleteMessageCommand,
  SendMessageCommandInput
} from "@aws-sdk/client-sqs";

export class SQSService {

  private client: SQSClient;
  private queueUrl: string;

  constructor(queueUrl: string, region: string = "ap-south-1") {

    this.queueUrl = queueUrl;

    this.client = new SQSClient({
      region
    });

  }

  async sendMessage(message: object) {

    const params: SendMessageCommandInput = {

      QueueUrl: this.queueUrl,

      MessageBody: JSON.stringify(message)

    };

    const command = new SendMessageCommand(params);

    return await this.client.send(command);

  }

  async receiveMessages() {

    const command = new ReceiveMessageCommand({

      QueueUrl: this.queueUrl,

      MaxNumberOfMessages: 10,

      WaitTimeSeconds: 5

    });

    return await this.client.send(command);

  }

  async deleteMessage(receiptHandle: string) {

    const command = new DeleteMessageCommand({

      QueueUrl: this.queueUrl,

      ReceiptHandle: receiptHandle

    });

    return await this.client.send(command);

  }

}