using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

using WebSocketSharp;
using WebSocketSharp.Server;


namespace web_socket_microcontroller
{

    public class Echo : WebSocketBehavior
    {
        protected override void OnMessage(MessageEventArgs e)
        {
            Console.WriteLine("Recived message from client :" + e.Data);
            Send(e.Data);
        }
    }


    public class SendRespone : WebSocketBehavior 
    {
        protected override void OnMessage(MessageEventArgs e)
        {
            Console.WriteLine("Recived message" + e.Data);
           
            Sessions.Broadcast("Message recived.");
        }
    }


    internal class Program
    {
        static void Main(string[] args)
        {
            WebSocketServer wssv = new WebSocketServer("ws://0.0.0.0:7890");

            wssv.AddWebSocketService<Echo>("/Echo");

            wssv.Start();
            Console.WriteLine("Web socket server runed on this address   ws://0.0.0.0:7890");


            
            // close the server ... 
            Console.ReadKey();
            wssv.Stop();
        }
    }
}
