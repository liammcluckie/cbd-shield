from django.shortcuts import render, get_object_or_404

from .models import BlogPost


def all_blog_posts(request):
    """
    Function to retrieve and pass all 
    blog posts to the blog template
    """
    blogs = BlogPost.objects.all()

    context = {
        'blogs': blogs,
    }

    return render(request, 'blog/blog.html', context)


def single_blog(request, blog_id):
    """
    Retrieve blog posts with blog id in order to
    render the relevant single blog page
    """
    blog = get_object_or_404(BlogPost, pk=blog_id)

    context = {
        'blog': blog,
    }

    return render(request,'blog/single_blog.html', context)
