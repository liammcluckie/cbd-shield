# Generated by Django 3.2.8 on 2021-11-21 14:13

import autoslug.fields
import ckeditor.fields
from django.db import migrations, models


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='BlogPost',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('title', models.CharField(max_length=255, verbose_name='title')),
                ('slug', autoslug.fields.AutoSlugField(editable=False, populate_from='title', unique=True, verbose_name='slug')),
                ('image', models.ImageField(blank=True, null=True, upload_to='blog', verbose_name='image')),
                ('text', ckeditor.fields.RichTextField(verbose_name='text')),
                ('description', models.TextField(blank=True, null=True, verbose_name='description')),
                ('published', models.BooleanField(default=False, verbose_name='published')),
                ('created', models.DateTimeField(auto_now_add=True, verbose_name='created')),
                ('modified', models.DateTimeField(auto_now=True, verbose_name='modified')),
                ('pub_date', models.DateTimeField(blank=True, null=True, verbose_name='publish date')),
            ],
            options={
                'verbose_name': 'blog post',
                'verbose_name_plural': 'blog posts',
                'ordering': ['pub_date'],
            },
        ),
    ]
