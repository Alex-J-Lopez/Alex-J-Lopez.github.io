
import content from '../../../public/content.json';

export default function WorkHistory() {
	const jobs = (content && content.workHistory) || [];

	return (
		<div className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 text-slate-100">
			<div className="max-w-6xl mx-auto px-6 py-16">
				<div className="bg-white/5 p-8 rounded-xl shadow-md">
					<h1 className="text-4xl md:text-5xl font-extrabold mb-6">Work Experience</h1>

					<div className="space-y-8">
						{jobs.length === 0 && (
							<p className="text-slate-300">No work history available.</p>
						)}

						{jobs.map((job, idx) => (
							<article key={idx} className="bg-white/3 p-6 rounded-lg">
								<h2 className="text-2xl font-semibold">
									{job.title}
									{job.company ? (
										<span>
											{' '}-{' '}
											{job.companyUrl ? (
												<a href={job.companyUrl} target="_blank" rel="noreferrer" className="text-rose-400 hover:underline">{job.company}</a>
											) : (
												<span className="text-rose-300">{job.company}</span>
											)}
										</span>
									) : null}
								</h2>
								{job.description && <p className="text-slate-200 mt-3">{job.description}</p>}
								{job.technologies && job.technologies.length > 0 && (
									<div>
										<p className="mt-2 font-semibold">Skills Used:</p>
										<ul className="mt-1 flex flex-wrap gap-2">
											{job.technologies.map((skill, index) => (
												<li key={index} className="px-3 py-1 bg-white/10 rounded-full text-sm">{skill}</li>
											))}
										</ul>
									</div>
								)}
								{job.duration && <p className="text-sm text-slate-400 mt-3">Duration: {job.duration}</p>}
							</article>
						))}

					</div>

				</div>
			</div>
		</div>
	);
}
