# Generated by Django 5.0.4 on 2024-05-13 09:46

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('core_film', '0003_alter_film_actors'),
        ('core_person', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='film',
            name='actors',
            field=models.ManyToManyField(to='core_person.person'),
        ),
    ]
