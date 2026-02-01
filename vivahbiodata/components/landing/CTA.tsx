
const CTA = () => {
  return (
    <div className="w-full bg-primary/5 dark:bg-primary/10 py-16 border-t border-primary/10">
      <div className="max-w-[960px] mx-auto px-4 text-center flex flex-col items-center gap-6">
        <h2 className="text-3xl font-bold text-text-main dark:text-background-light">Ready to find your partner?</h2>
        <p className="text-text-muted dark:text-gray-300 max-w-lg font-body">Create a biodata that makes a great first impression. It only takes 3 minutes and it's completely free to try.</p>
        <a href='/templates' className="flex min-w-[200px] cursor-pointer items-center justify-center rounded-lg h-12 px-8 bg-primary hover:bg-primary-dark transition-all text-background-dark dark:text-background-dark text-lg font-bold shadow-lg">
          Create Biodata Now
        </a >
        <p className="text-xs text-text-muted dark:text-gray-400 mt-4 font-body">Made with ❤️ for Indian Families</p>
      </div>
    </div>
  );
};

export default CTA;