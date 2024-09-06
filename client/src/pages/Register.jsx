import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { registerUser } from '../app/reducers/AuthReducer';
import { Link, useNavigate } from 'react-router-dom';

const Register = () => {
	const [email, setEmail] = useState('');
	const [name, setName] = useState('');
	const [password, setPassword] = useState('');
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const { isLoading, error, isAuthenticated } = useSelector((state) => state.auth);

	const handleSubmit = (e) => {
		e.preventDefault();
		dispatch(registerUser({ email, password, name }));
	};

	if (isAuthenticated) {
		return navigate('/');
	}

	return (
		<div className="relative flex justify-center items-center min-h-screen overflow-hidden">
			{/* Fond flou avec points de couleur */}
			<div className="absolute inset-0 z-0">
				<div className="absolute top-1/4 left-1/4 w-48 h-48 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>
				<div className="absolute top-1/3 right-1/4 w-72 h-72 bg-yellow-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-2000"></div>
				<div className="absolute bottom-1/4 left-1/3 w-60 h-60 bg-pink-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
			</div>

			{/* Contenu */}
			<div className="w-full max-w-md m-auto bg-white border border-gray-200 rounded-xl shadow-sm relative z-10">
				<div className="p-4 sm:p-7">
					<div className="text-center">
						<h1 className="block text-2xl font-bold text-gray-800 dark:text-white">
							Inscription
						</h1>
						<p className="mt-2 text-sm text-gray-600 dark:text-neutral-400">
							Vous avez déjà un compte ?
							<Link
								className="text-blue-600 decoration-2 hover:underline focus:outline-none focus:underline font-medium dark:text-blue-500"
								to="/login"
							>
								Connectez-vous ici
							</Link>
						</p>
					</div>
					<div className="mt-5">
						{/* Formulaire */}
						<form onSubmit={handleSubmit}>
							<div className="grid gap-y-4">
								{/* Champ Nom */}
								<div>
									<label htmlFor="name" className="block text-sm mb-2 dark:text-white">
										Nom
									</label>
									<input
										type="text"
										id="name"
										name="name"
										value={name}
										onChange={(e) => setName(e.target.value)}
										className="py-3 px-4 block w-full border border-gray-300 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400"
										required
									/>
								</div>
								{/* Champ Email */}
								<div>
									<label htmlFor="email" className="block text-sm mb-2 dark:text-white">
										Adresse e-mail
									</label>
									<input
										type="email"
										id="email"
										name="email"
										value={email}
										onChange={(e) => setEmail(e.target.value)}
										className="py-3 px-4 block w-full border border-gray-300 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400"
										required
									/>
								</div>
								{/* Champ Mot de passe */}
								<div>
									<label htmlFor="password" className="block text-sm mb-2 dark:text-white">
										Mot de passe
									</label>
									<input
										type="password"
										id="password"
										name="password"
										value={password}
										onChange={(e) => setPassword(e.target.value)}
										className="py-3 px-4 block w-full border border-gray-300 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400"
										required
									/>
								</div>
								{error && (
									<div className="text-red-500 text-sm">
										{typeof error === 'object' && error.message
											? error.message
											: error.toString()}
									</div>
								)}
								<button
									type="submit"
									className="w-full py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
									disabled={isLoading}
								>
									{isLoading ? "Inscription en cours..." : "S'inscrire"}
								</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Register;
