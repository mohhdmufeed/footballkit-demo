import { PageShell } from '@/components/page-shell';
import { communityPosts, pollOptions } from '@/app/data/football';

export default function CommunityPage() {
  return (
    <PageShell eyebrow="Community" title="Fan conversation and predictions" description="Create a lively football community experience with polls and discussion prompts.">
      <div className="grid gap-6 lg:grid-cols-[0.9fr,1.1fr]">
        <div className="rounded-3xl border border-white/10 bg-white/5 p-5">
          <p className="text-lg font-semibold">Weekly poll</p>
          <p className="mt-2 text-sm text-slate-400">Who will take the title race lead next?</p>
          <div className="mt-4 space-y-2">
            {pollOptions.map((option) => (
              <div key={option} className="rounded-2xl border border-white/10 bg-black/20 px-3 py-2 text-sm">
                {option}
              </div>
            ))}
          </div>
        </div>
        <div className="space-y-3">
          {communityPosts.map((post) => (
            <div key={post.author} className="rounded-3xl border border-white/10 bg-white/5 p-5">
              <p className="font-semibold">{post.author}</p>
              <p className="mt-2 text-sm text-slate-300">{post.text}</p>
            </div>
          ))}
        </div>
      </div>
    </PageShell>
  );
}
