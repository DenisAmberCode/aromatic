# Generated by Django 2.1 on 2019-08-09 16:42

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('products', '0005_auto_20190809_1555'),
    ]

    operations = [
        migrations.AlterField(
            model_name='productimg',
            name='image',
            field=models.ImageField(upload_to='products_images'),
        ),
    ]
