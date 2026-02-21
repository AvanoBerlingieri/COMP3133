// Resolvers define the technique for fetching the types defined in the schema.
import Movie from '../models/movie.js';

const movieResolvers = {

    Query: {

        getAllMovies: async () => {
            return await Movie.find();
        },

        getMovieById: async (_, {id}) => {
            return await Movie.findById(id);
        },

        getMoviesByDirector: async (_, {director_name}) => {
            return await Movie.findByDirector(director_name);
        }
    },

    Mutation: {

        insertMovie: async (_, args) => {
            const newMovie = new Movie(args);
            return await newMovie.save();
        },

        updateMovie: async (_, {id, ...updates}) => {
            return await Movie.findByIdAndUpdate(
                id,
                updates,
                {new: true, runValidators: true}
            );
        },

        deleteMovie: async (_, {id}) => {
            const deleted = await Movie.findByIdAndDelete(id);
            if (!deleted) {
                throw new Error("Movie not found");
            }
            return "Movie deleted successfully";
        }
    }
};

export default movieResolvers;