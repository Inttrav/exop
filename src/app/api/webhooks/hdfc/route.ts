import { NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';
import { broadcastTransaction } from '../../../../lib/websocket-server';

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL!,
  process.env.SUPABASE_SERVICE_ROLE_KEY!
);

export async function POST(req: Request) {
  try {
    const payload = await req.json();

    // Verify webhook signature (you should implement this)
    // const signature = req.headers.get('x-hdfc-signature');
    // if (!verifySignature(payload, signature)) {
    //   return NextResponse.json({ error: 'Invalid signature' }, { status: 401 });
    // }

    if (payload.type === 'transaction.created') {
      const transaction = {
        transaction_id: payload.data.id,
        amount: payload.data.amount,
        type: payload.data.type,
        description: payload.data.description,
        category: payload.data.category,
        timestamp: payload.data.timestamp,
        balance: payload.data.balance,
        user_id: payload.data.user_id,
      };

      // Store the transaction in Supabase
      const { error } = await supabase
        .from('transactions')
        .insert([transaction]);

      if (error) {
        console.error('Error storing transaction:', error);
        return NextResponse.json({ error: 'Database error' }, { status: 500 });
      }

      // Broadcast the transaction to connected WebSocket clients
      broadcastTransaction(transaction);

      return NextResponse.json({ success: true });
    }

    return NextResponse.json({ error: 'Unsupported event type' }, { status: 400 });
  } catch (error) {
    console.error('Webhook error:', error);
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}